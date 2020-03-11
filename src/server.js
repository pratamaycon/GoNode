import app from './app'; 
/** Se o servidor passar uma porta se não assume a 3333 */
app.listen(process.env.PORT || 3333);