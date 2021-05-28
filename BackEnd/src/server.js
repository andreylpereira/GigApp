import App from './app'

const port = process.env.PORT || 3030;

App.listen(port, () => { 
    console.log(`Server running in http://localhost:${port}`);
});