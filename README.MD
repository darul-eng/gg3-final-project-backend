# Tokopedia Play Clone - Back-End

A Web Service built using Node.js with Express Framework and RESTful API and using MongoDB Database.

---

## Database Structure
### Collection

### videos

- Description: Store Information about list videos in application
  - Document Structure:
    ```
    {
      _id: ObjectId(auto-generate),
      videoID: {string, required, unique},
      urlImgThum: {string, required}
    }
    ```
### products

- Description: Store Information about list product from video in application
  - Document Structure:
    ```
    {
      _id: ObjectId(auto-generate),
      productID: {string, required},
      videoID: {string, required, unique},
      linkProduct: {string, required},
      title: {string, required},
      price: {number, required},
    }
    ```
### comments

- Description: Store Information about list comment from video in application
  - Document Structure:
    ```
    {
      _id: ObjectId(auto-generate),
      videoID: {string, required, unique},
      username: {string, required},
      comment: {string, required},
      timestamp: (auto-generate)
    }
    ```
---

## API Structure
### Videos
### GET /api/v1/videos

#### Description: Returns all video in the application.

* **URL Params**  
  `None`
* **Data Params / body**  
  `None`
* **Headers**  
  `Content-Type: application/json`


* **Success Response:**
* **Code:** `200`  
  **Response:**
  ```
  {
    message: "Success",
    status: 200,
    data: [
      {
        videoId: string,
        urlImgThumn: string
      },
      {
        videoId: string,
        urlImgThumn: string
      }
      ....
    ]
  }
  ```

### GET `/api/v1/videos/:id/products`
#### Description: Returns all product belonging to video in the application.

* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params / body**  
  `None`
* **Headers**  
  `Content-Type: application/json`

  `Accept: application/json`


* **Success Response:**
* **Code:** `200`  
  **Response:**
  ```
  {
    message: "Success",
    status: 200,
    data: [
      {
        productID: string,
        linkProduct: string,
        title: string,
        price: number
      },
      {
        productID: string,
        linkProduct: string,
        title: string,
        price: number
      },
      ....
    ]
  }
  ```
* **Error Response:**
* **Code:** `404`  
  **Content:**
  ```
  {
    message: "video id is not found",
    status: 404
  }
  ```  


### GET `/api/v1/videos/:id/comments`
#### Description: Returns all comment belonging to video in the application.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params / body**  
  `None`
* **Headers**  
  `Content-Type: application/json`

  `Accept: application/json`


* **Success Response:**
* **Code:** `200`  
  **Response:**
  ```
  {
    message: "Success",
    status: 200,
    data: [
      {
        username: string,
        comment: string,
        created_at: date,
        updated_at: date
      },
      {
        username: string,
        comment: string,
        created_at: date,
        updated_at: date
      },
      ....
    ]
  }
  ```
* **Error Response:**
* **Code:** `404`  
  **Content:**
  ```
  {
    message: "video id is not found",
    status: 404
  }
  
  ```  

### POST `/api/v1/videos/:id/comments`
#### Description: Create a comment for the video in the application.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params / Body**  
  ```
    {
      username: {string, required},
      comment: {string, required}
    }
  ```
* **Headers**  
  `Content-Type: application/json`

  `Accept: application/json`


* **Success Response:**
* **Code:** `200`  
  **Response:**
  ```
  {
    message: "Success",
    status: 201
  }
  ```
* **Error Response:**
* **Code:** `400`  
  **Content:**
  ```
  {
    message: "username is not allowed to be empty",
    status: 400
  }
  
  ```  
  
  #### or
  
  ```
  {
    message: "comment is not allowed to be empty",
    status: 400
  }
  
  ```  

---

## How to Use
### Requirements
Be sure to complete the following requirements
- `node.js v18.16.1`
- `npm v9.5.1`
- `mongodb v6.0.8`

### Configuration
1. Open terminal and Clone project from `https://github.com/darul-eng/gg3-final-project-backend.git`
2. Make sure you are at the root of the project. if not, you can use the command `cd destionation_path`
3. Run command `npm install` to install all dependencies.
4. Make file `.env` file following the `.env-example` and fill in each variable according to your needs.
5. Make sure mongodb is running and Run command `npm start` to start application using nodemon.
6. Run command `node seed` to seed data into your database
7. Web Service Ready to use