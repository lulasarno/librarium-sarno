export const productos = [

    {
        name:'Poeta chileno', 
        autor: 'Alejandro Zamba',
        price: 29500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'../poetachileno.png',
    },
    {
        name:'Las indignas', 
        autor: 'Agustina Bazterrica', 
        price: 20299 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'../lasindignas.png',
    },
    {
        name:'Quedara el amor',
        autor: 'Alice Kellen', 
        price: 35500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'../quedaraelamor.png',
    },
    {
        name:'La voz ausente', 
        autor: 'Gabriel Rolon',
        price: 36000 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'../lavozausente.png',
    },

    {
        name:'Carrie',
        autor: 'Stephen King', 
        price: 31999 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'../carrie.png',
    },
    {
        name:'La segunda venida de Hilda Bustamante', 
        autor: 'Salomé Esper',
        price: 19500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'../lasegunda.png',
    },
    {
        name:'Las hermanas Blue', 
        autor: 'Coco Mellors',
        price: 28400 ,
        description: " Idioma: Español Encuadernacion: Tapa dura" , 
        stock: 10, 
        category: 'nuevos', 
        img:'../lashermanas.png',
    },
    {
        name:'Las aventuras de la China Iron', 
        autor: 'Gabriela Cabezón Cámara',
        price: 20300 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'../lasaventuras.png',
    },
    {
        name:'Violeta', 
        autor: 'Isabel Allende',
        price: 24699 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'mas vendidos', 
        img:'../violeta.png',
    },
    {
        name:'El principe cautivo', 
        autor: 'C.S Pacat',
        price: 21300 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'../elprincipe.png',
    },
    {
        name:'Las niñas del naranjel', 
        autor: 'Gabriela Cabezón Cámara',
        price: 33999 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'../lasniñas.png',
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
        })
    })
}