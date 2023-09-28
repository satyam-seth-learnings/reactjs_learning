1. [ENV and Appwrite in React project](https://youtu.be/4_JlIr8yry0?si=coUxwKfTCi5epL47)

    - Dependencies -

        - [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

        - [react-redux](https://www.npmjs.com/package/react-redux)

        - [react-router-dom](https://www.npmjs.com/package/react-router-dom)

        - [@tinymce/tinymce-react](https://www.npmjs.com/package/@tinymce/tinymce-react)

        - [html-react-parser](https://www.npmjs.com/package/html-react-parser)

        - [react-hook-form](https://www.npmjs.com/package/react-hook-form)

        - [appwrite](https://www.npmjs.com/package/appwrite)
    
    - How to setup ENV variable

        - [Create React App Doc Link](https://create-react-app.dev/docs/adding-custom-environment-variables/)

        - [ViteJS Doc Link](https://vitejs.dev/guide/env-and-mode.html)

    - [Appwrite Website Link](https://cloud.appwrite.io/)
   
        - Create project named - `chaiblog`
   
        - Setup Database
   
            - Create a database named - `blog`
            
            - Create a collection named - `articles`
            
            - Define attributes for `articles` collection
            
                 ![image](https://github.com/satyam-seth-learnings/reactjs_learning/assets/63374020/5d3a78bf-2d20-481d-972f-3df199c845a1)
            
            - Create index for `articles` collection named `status`
            
                 ![image](https://github.com/satyam-seth-learnings/reactjs_learning/assets/63374020/b5d1ce25-b115-4bc7-ba17-e2a830525e6d)
            
            - Set permission Users can CRUD for `articles` collection
            
            - Create bucket named `images`
            
            - Set permission Users can CRUD for `images` collection bucket
            
                ![image](https://github.com/satyam-seth-learnings/reactjs_learning/assets/63374020/44ed42b6-43a6-4236-8440-419ee46a9909)

2. [Build authentication service with appwrite](https://youtu.be/0Py5cGGW2lE?si=l_SdmZ_3zs6X1Dwn)
   
   - [Appwrite Signup Doc Link](https://appwrite.io/docs/references/cloud/client-web/account#create)
   
   - [Appwrite Login Doc Link](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession)
   
   - [Appwrite Get Account Details Doc Link](https://appwrite.io/docs/references/cloud/client-web/account#get)
   
   - [Appwrite Logout Doc Link](https://appwrite.io/docs/references/cloud/client-web/account#deleteSession)