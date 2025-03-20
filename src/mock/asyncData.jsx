const productos = [
    {
        id:'01',
        name:'Un cuento perfecto', 
        autor: 'Elisabet Benavent',
        price: 54000 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'mas vendidos', 
        img:'/librarium-sarno/public/uncuentoperfecto.png',
    },
    {
        id:'02',
        name:'Poeta chileno', 
        autor: 'Alejandro Zamba',
        price: 29500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/poetachileno.png',
    },
    {
        id:'03',
        name:'Las indignas', 
        autor: 'Agustina Bazterrica', 
        price: 20299 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'/librarium-sarno/public/lasindignas.png',
    },
    {
        id:'04',
        name:'Quedara el amor',
        autor: 'Alice Kellen', 
        price: 35500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/quedaraelamor.png',
    },
    {
        id:'05',
        name:'La voz ausente', 
        autor: 'Gabriel Rolon',
        price: 36000 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'/librarium-sarno/public/lavozausente.png',
    },

    {
        id:'06',
        name:'Carrie',
        autor: 'Stephen King', 
        price: 31999 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/carrie.png',
    },
    {
        id:'07',
        name:'La segunda venida de Hilda Bustamante', 
        autor: 'Salomé Esper',
        price: 19500 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'/librarium-sarno/public/lasegunda.png',
    },
    {
        id:'08',
        name:'Las hermanas Blue', 
        autor: 'Coco Mellors',
        price: 28400 ,
        description: " Idioma: Español Encuadernacion: Tapa dura" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/lashermanas.png',
    },
    {
        id:'09',
        name:'Las aventuras de la China Iron', 
        autor: 'Gabriela Cabezón Cámara',
        price: 20300 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'usados', 
        img:'/librarium-sarno/public/lasaventuras.png',
    },
    {
        id:'10',
        name:'Violeta', 
        autor: 'Isabel Allende',
        price: 24699 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'mas vendidos', 
        img:'/librarium-sarno/public/violeta.png',
    },
    {
        id:'11',
        name:'El principe cautivo', 
        autor: 'C.S Pacat',
        price: 21300 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/elprincipe.png',
    },
    {
        id:'12',
        name:'Las niñas del naranjel', 
        autor: 'Gabriela Cabezón Cámara',
        price: 33999 ,
        description: " Idioma: Español Encuadernacion: Tapa blanda" , 
        stock: 10, 
        category: 'nuevos', 
        img:'/librarium-sarno/public/lasniñas.png',
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