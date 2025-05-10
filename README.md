# **@mvkproject/nexus**

[![npm version](https://img.shields.io/npm/v/@mvkproject/nexus.svg)](https://www.npmjs.com/package/@mvkproject/nexus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> ⚡️ **Official Node.js wrapper for the [MVKProject Nexus API](https://nexus.adonis-except.xyz/)**

Seamlessly access powerful AI models, image generation, advanced vision, and Discord card utilities—directly from your Node.js projects.  
Full API docs: [https://nexus.adonis-except.xyz/](https://nexus.adonis-except.xyz/)

---

## 📦 Installation

```bash
npm install @mvkproject/nexus
```

---

## 🚀 Getting Started

To use this package, you’ll need an API key.  
Join the [Discord Server](https://discord.gg/9d8MP9gRbz) to get your key.

### Usage Examples

#### CommonJS

```javascript
const NexusAPI = require('@mvkproject/nexus');
const nexus = new NexusAPI('your-api-key-here');
// Use API methods...
```

#### ES Modules

```javascript
import NexusAPI from '@mvkproject/nexus';
const nexus = new NexusAPI('your-api-key-here');
// Use API methods...
```

#### TypeScript

```typescript
import NexusAPI from '@mvkproject/nexus';
const nexus = new NexusAPI('your-api-key-here');

const response = await nexus.chatGPT({
  text: "Hello world",
  userID: "user123"
}); // Typed & IntelliSense supported
```

---

## ✨ Features

- **AI Models**: ChatGPT, Gemini, DeepSeek, Meta AI
- **Image Generation**: Ultra-flexible AI image creation
- **Vision AI**: Powerful image content/scene analysis
- **Discord Utilities**: Welcome, rank, level-up cards

---

## 📚 API Reference

### 🤖 AI Models

#### `chatGPT()`

```javascript
const response = await nexus.chatGPT({
  text: "What is artificial intelligence?",
  userID: "user123",
  personality: "professor",
  length: "medium",
  systemInstruction: "You are a helpful assistant",
  model: "gpt-4o-mini" // Default: gpt-4o-mini
});
console.log(response.result);
```
**Parameters:**
- `text` (string, required): Prompt input
- `userID` (string, required): User identifier
- `personality`, `length`, `systemInstruction`, `model` (optional)

#### `gemini()`

```javascript
const response = await nexus.gemini({
  text: "Describe this image",
  userID: "user123",
  image: "https://example.com/image.jpg",
  personality: "descriptive",
  model: "gemini-1.5-flash"
});
console.log(response.result);
```
**Parameters:**
- `text` (string, required)
- `userID` (string, required)
- `image` (string|array, optional)
- `personality`, `length`, `systemInstruction`, `model` (optional)

#### `deepSeek()`

```javascript
const response = await nexus.deepSeek({
  text: "Explain quantum computing",
  userID: "user123",
  personality: "technical",
  length: "long",
  context: "You are a quantum physics expert"
});
console.log(response.result);
```

#### `metaAI()`

```javascript
const response = await nexus.metaAI({
  text: "Write a short story about space exploration",
  userID: "user123",
  personality: "creative",
  length: "medium",
  context: "You are a science fiction author"
});
console.log(response.result);
```

---

### 🖼️ Image Services

#### **Image Analysis (Vision AI)**

```javascript
const response = await nexus.analyzeImage({
  url: "https://example.com/image.jpg",
  prompt: "What can you see in this image?",
  userID: "user123"
});
console.log(response.result);
```
**Parameters:**  
- `url` (string, required): Image URL  
- `prompt` (string, required): Analysis prompt  
- `userID` (string, required)

#### **AI Image Generation**

```javascript
const response = await nexus.generateImage({
  prompt: "A futuristic city with flying cars and neon lights",
  negative_prompt: "blurry, low quality",
  model: "flux-realism",
  width: 1024,
  height: 1024,
  enhance: true
});
console.log(response.result); // Path to image
```
**Parameters:**  
- `prompt` (string, required)
- `negative_prompt`, `model`, `width`, `height`, `seed`, `nologo`, `private`, `enhance`, `safe` (optional)

**Available models:**  
`flux`, `flux-realism`, `flux-anime`, `flux-3d`, `flux-pro`, `any-dark`, `turbo`, `pimp-diffusion`, `magister-diffusion`, `dolly-mini`, `stable-diffusion`, `stable-diffusion-animation`, `photo3dwillit`, `lucid-sonic-dreams`, `codeformer`, `bark`, `3d-photo-inpainting`

---

### 🎭 Discord Cards

#### **Welcome Image**

```javascript
const response = await nexus.generateWelcomeImage({
  background: "https://example.com/background.jpg",
  text1: "Welcome to the Server!",
  text2: "We're glad you're here",
  useravatar: "https://example.com/avatar.png",
  textColor: "#ffffff",
  bordeColor: "#ff5500",
  type: 2
});
console.log(response.result);
```

#### **Rank/Level Card**

```javascript
// Type 1 (default)
const response = await nexus.generateRankCard({
  background: "https://example.com/background.jpg",
  username: "CoolUser",
  level: 15,
  xp: 2500,
  requiredXp: 5000,
  avatar: "https://example.com/avatar.png",
  status: "online",
  color: "#ff5500",
  border: "#ffffff",
  colorBar: "#00ff00",
  textcolorBar: "#000000"
});

// Type 4
const response2 = await nexus.generateRankCard({
  background: "#1a1a1a",
  username: "CoolUser",
  level: 15,
  xp: 2500,
  requiredXp: 5000,
  avatar: "https://example.com/avatar.png",
  rank: 3,
  tag: "1234",
  color: "#ffffff",
  border: 4,
  colorBar: "#00ff00",
  type: 4
});
console.log(response.result);
```

#### **Level Up Card**

```javascript
const response = await nexus.generateLevelUpCard({
  avatar: "https://example.com/avatar.png",
  backround: "#1a1a1a", // Note typo: "backround"
  username: "CoolUser",
  levels: [10, 11],
  border: "#ffffff",
  avatarBorder: "#ff5500",
  opacity: 0.7
});
console.log(response.result);
```

#### **Rank Card Types**

| Type | Description | Example |
|------|-------------|---------|
| 1 | Default: all features (background URL/hex, border color) | ![Type 1](https://nexus.adonis-except.xyz/example/rank-card_type-1.png) |
| 2 | Simpler, ignores some style params | ![Type 2](https://nexus.adonis-except.xyz/example/rank-card_type-2.png) |
| 3 | Needs `rank`, custom colors | ![Type 3](https://nexus.adonis-except.xyz/example/rank-card_type-3.png) |
| 4 | Hex background, tag, border width | ![Type 4](https://nexus.adonis-except.xyz/example/rank-card_type-4.png) |

---

## ⚠️ Error Handling

All methods throw clear error messages if something fails:

```javascript
try {
  const response = await nexus.chatGPT({ text: "Hello", userID: "user123" });
  console.log(response);
} catch (error) {
  console.error("Error:", error.message);
}
```

---

## 📄 License

MIT

## 👨‍💻 Author

DarknessDev

---

## 🔗 Links

- [Discord Server for API Key](https://discord.gg/9d8MP9gRbz)
- [GitHub Repo](https://github.com/DarknessDEVV/-mvkproject-nexus)
- [NPM Package](https://www.npmjs.com/package/@mvkproject/nexus)
- [Full API Documentation](https://nexus.adonis-except.xyz/)
