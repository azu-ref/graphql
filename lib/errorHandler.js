function errorHandler(error){
    console.error(error);
    throw new Error('Fallo interno del servidor')
}