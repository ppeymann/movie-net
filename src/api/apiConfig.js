const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/',
    apikey:'3d6ec73aedc0acbaf8d72d5f0f9b6b05',
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig