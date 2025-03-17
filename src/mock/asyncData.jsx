const productos = [
    {
        id:'01',
        name:'Un cuento perfecto', 
        price: 54000 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'mas vendidos', 
        img:'/librarium-sarno/public/uncuentoperfecto.png',
    },
    {
        id:'02',
        name:'Poeta chileno', 
        price: 29500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/poetachileno.png',
    },
    {
        id:'03',
        name:'Las indignas', 
        price: 20299 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'/librarium-sarno/public/lasindignas.png',
    },
    {
        id:'04',
        name:'Quedara el amor', 
        price: 35500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/quedaraelamor.png',
    },
    {
        id:'05',
        name:'La voz ausente', 
        price: 36000 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'/librarium-sarno/public/lavozausente.png',
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },1000)
    })
}