const axios = require("axios")

class NexusAPI {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("API key is required. Join Discord server to get one: https://discord.gg/9d8MP9gRbz")
    }

    this.apiKey = apiKey
    this.baseURL = "https://nexus.mvkproject.xyz"
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "x-api-key": this.apiKey,
        "Content-Type": "application/json",
      },
    })
  }

  // Welcome Image Generation
  async generateWelcomeImage(options) {
    try {
      const response = await this.client.post("/welcome/welcome-image", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // Rank/Level Card Generation
  async generateRankCard(options) {
    try {
      const response = await this.client.post("/rank", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // Level Up Card Generation
  async generateLevelUpCard(options) {
    try {
      const response = await this.client.post("/rank/level-up", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // ChatGPT Interaction
  async chatGPT(options) {
    try {
      const response = await this.client.post("/chatgpt", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // Gemini Interaction
  async gemini(options) {
    try {
      const response = await this.client.post("/gemini", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // DeepSeek Interaction
  async deepSeek(options) {
    try {
      const response = await this.client.post("/deep-ai", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // Meta AI Interaction
  async metaAI(options) {
    try {
      const response = await this.client.post("/meta-ai", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // AI Image Analysis (Vision)
  async analyzeImage(options) {
    try {
      const response = await this.client.post("/vision", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  // AI Image Generation
  async generateImage(options) {
    try {
      const response = await this.client.post("/image-ai", options)
      return response.data
    } catch (error) {
      this._handleError(error)
    }
  }

  _handleError(error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`)
    } else if (error.request) {
      throw new Error("No response received from API")
    } else {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

module.exports = NexusAPI
