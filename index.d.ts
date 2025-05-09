
declare class NexusAPI {
  constructor(apiKey: string);
  
  generateWelcomeImage(options: {
    background: string;
    text1: string;
    text2: string;
    useravatar: string;
    textColor?: string;
    bordeColor?: string;
    type?: number;
  }): Promise<{ result: string }>;
  
  generateRankCard(options: {
    background: string;
    username: string;
    level: number;
    xp: number;
    requiredXp: number;
    avatar: string;
    status?: string;
    rank?: number;
    color?: string;
    border?: string | number;
    colorBar?: string;
    textcolorBar?: string;
    tag?: string;
    type?: number;
  }): Promise<{ result: string }>;
  
  generateLevelUpCard(options: {
    avatar: string;
    backround: string;
    username: string;
    levels: number[] | { old: number; new: number };
    border?: string;
    avatarBorder?: string;
    opacity?: number;
  }): Promise<{ result: string }>;
  
  chatGPT(options: {
    text: string;
    userID: string;
    personality?: string;
    length?: string;
    systemInstruction?: string;
    model?: string;
  }): Promise<{ result: string }>;
  
  gemini(options: {
    text: string;
    userID: string;
    image?: string | string[];
    personality?: string;
    length?: string;
    systemInstruction?: string;
    model?: string;
  }): Promise<{ result: string }>;
  
  deepSeek(options: {
    text: string;
    userID: string;
    personality?: string;
    length?: string;
    context?: string;
  }): Promise<{ result: string }>;
  
  metaAI(options: {
    text: string;
    userID: string;
    personality?: string;
    length?: string;
    context?: string;
  }): Promise<{ result: string }>;
  
  analyzeImage(options: {
    url: string;
    prompt: string;
    userID: string;
  }): Promise<{ result: string }>;
  
  generateImage(options: {
    prompt: string;
    negative_prompt?: string;
    model?: string;
    width?: number;
    height?: number;
    seed?: number;
    nologo?: boolean;
    private?: boolean;
    enhance?: boolean;
    safe?: boolean;
  }): Promise<{ result: string }>;
}

export = NexusAPI;
export default NexusAPI;
