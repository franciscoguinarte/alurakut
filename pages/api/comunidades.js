import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequest(request, response) {

    if(request.method === "POST") {
        
        const TOKEN = 'd42094b3d35938f41753b0f7228d9b'
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "972778",
            ...request.body,
          
            // title: "Comunidade de teste",
            // imageUrl: "https://github.com/franciscoguinarte.png",
            // creatorSlug: "omariosolto"
        })
    
        console.log(registroCriado)
        response.json({
            dados: "Algum dado qualquer",
            registroCriado: registroCriado
        })
    }




}