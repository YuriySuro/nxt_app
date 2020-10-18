import axios from "axios";

export default async (req, res) => {

    switch(req.method) {
        case 'POST':
           const postData = JSON.parse(req.body);
           console.log(postData);
           return res.json({
               status: 'Saving Post to DB',
               ...postData
           }); 
        default:
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data.slice(0, 20);
            return res.json(posts);
    }
    
}