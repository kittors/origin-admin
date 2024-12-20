import pinyin from 'pinyin';
import translate from 'translate-google';
import fs from 'node:fs';
import { resolve } from 'node:path';

interface NameMapping {
    chinese: string;
    english: string;
    pinyin: string;
    timestamp: string;
}

const MAPPING_FILE = resolve(process.cwd(), 'src/api/modules/log/name-mapping.json');

export class NameMapper {
    private mappings: Record<string, NameMapping> = {};

    constructor() {
        this.loadMappings();
    }

    private loadMappings() {
        try {
            if (fs.existsSync(MAPPING_FILE)) {
                this.mappings = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf-8'));
            }
        } catch (error) {
            console.error('Failed to load mappings:', error);
        }
    }

    private saveMappings() {
        try {
            fs.writeFileSync(MAPPING_FILE, JSON.stringify(this.mappings, null, 2));
        } catch (error) {
            console.error('Failed to save mappings:', error);
        }
    }

    private async translateToEnglish(text: string): Promise<string> {
        try {
            const translated = await translate(text, { from: 'zh-CN', to: 'en' });
            return translated.toLowerCase().replace(/\s+/g, '-');
        } catch (error) {
            console.error('Translation failed:', error);
            return this.getPinyinName(text);
        }
    }

    private getPinyinName(text: string): string {
        return pinyin(text, {
            style: pinyin.STYLE_NORMAL,
            heteronym: false
        }).flat().join('-');
    }

    async getMapping(chineseName: string): Promise<string> {
        // 清理名称中的特殊字符
        const cleanName = chineseName.replace(/[（(].*[)）]|控制层|操作处理|信息|业务处理|\s+/g, '').trim();

        // 如果已经有映射，直接返回
        if (this.mappings[cleanName]) {
            return this.mappings[cleanName].english;
        }

        // 生成新的映射
        const pinyinName = this.getPinyinName(cleanName);
        const englishName = await this.translateToEnglish(cleanName);

        // 保存映射
        this.mappings[cleanName] = {
            chinese: cleanName,
            english: englishName,
            pinyin: pinyinName,
            timestamp: new Date().toISOString()
        };

        this.saveMappings();
        return englishName;
    }
}
