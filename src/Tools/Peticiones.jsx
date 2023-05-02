export const RealizarPeticion = async (Url_) => {
    const Petición = await fetch(Url_);
    const DataUser = await Petición.json();
    return DataUser;
  };
