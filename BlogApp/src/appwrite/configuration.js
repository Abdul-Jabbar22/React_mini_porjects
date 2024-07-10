import config from "../config.js";
import { Client, ID, Databases, Storage, Query, Flag } from "appwrite";
import conf from "../config/config.js";

export class Severice {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("crete post error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwirte post update eror", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite del error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite getpost error ", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite posts error", error);

      return false;
    }
  }

  // file uploade service

  async uploadFile(file) {
    try {
    } catch (error) {
      console.log("Appwrite service uploadfiles", error);
      return false;
    }
  }
}

const service = new Severice();

export default service;
