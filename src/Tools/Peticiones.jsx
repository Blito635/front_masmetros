export const RealizarPeticion = async (Url_) => {
    const Petición = await fetch(Url_);
    const DataUser = await Petición.json();
    return DataUser;
  };

  /* Funcion en la cual se realiza la peticion fetch para 
  consumo de las api propias o de terceros*/