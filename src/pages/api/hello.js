// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const datos = {name: 'Fidel', lastname: 'Nava', sexo: "Nunca", edad: 21, ciudad: "Colima", estadoCivil: false,}
  return res.status(200).json(datos)
}

