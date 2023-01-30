import { getDbInstance } from "../config/database.js";

const setItem = (name, price, descountPrice, image, category) => ({name, price, descountPrice, image, category});

const cachorroCategoria = [
    setItem("Brinquedo Chalesco Pelúcia Macaco", 31.49, 28.34, "https://www.petlove.com.br/images/products/87805/product/70361.jpg", "cachorro"),
    setItem("Ração Seca Pedigree Nutrição Essencial Carne para Cães Adultos Raças Médias e Grandes", 168.90, 152.01, "https://www.petlove.com.br/images/products/228571/product/Ra%C3%A7%C3%A3o_Seca_Pedigree_Nutri%C3%A7%C3%A3o_Essencial_Carne_para_C%C3%A3es_Adultos_2513328_1.jpg", "cachorro"),
    setItem("Agasalho Pickorruchos Puppy Estampas Sortidas", 59.99, 53.99, "https://www.petlove.com.br/images/products/241434/product/Agasalho_Pickorruchos_Puppy_Estampas_Sortidas_1907959_(2).jpg", "cachorro"),
    setItem("Moletom Zooz Pets Charlie Snoopy Hug Jade", 109.90, 98.91, "https://www.petlove.com.br/images/products/200856/product/Moletom_Zooz_Pets_Charlie_Snoopy_Hug_Jade_2004010_2.jpg", "cachorro"),
    setItem("Casa Furacão Pet de Plástico", 199.99, 179.99, "https://www.petlove.com.br/images/products/174350/product/7898490094516.jpg", "cachorro"),
    setItem("Tela Protetora para Porta", 86.50, 77.85, "https://www.petlove.com.br/images/products/237053/product/2647999_Tela_Protetora_para_Porta_2.jpg", "cachorro"),
];

const gatoCategoria = [
    setItem("Petisco Whiskas Temptations Antibola de Pelo para Gatos Adultos", 11.09, 9.98, "https://www.petlove.com.br/images/products/186579/product/Whiskas_Petisco_Temptations_AntiBoladePelo_3100683_2.jpg", "gato"),
    setItem("Areia Sanitária Kelco Pipicat Multicat - 12 Kg", 41.90, 37.71, "https://www.petlove.com.br/images/products/233440/product/Areia_Sanit%C3%A1ria_Kelco_Pipicat_Multicat_-_12_Kg_3105886.jpg", "gato"),
    setItem("Ração Seca PremieR Pet Golden Salmão para Gatos Adultos Castrados", 176.90, 159.21, "https://www.petlove.com.br/images/products/266053/product/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrados_-_10_1_Kg_31022435-3_1.jpg", "gato"),
    setItem("Granulado Higiênico de Madeira CarePet Premium Original", 18.29, 16.46, "https://www.petlove.com.br/images/products/254426/product/Granulado_Higi%C3%AAnico_de_Madeira_CarePet_Premium_Original_-_2_5_Kg_3110550-1_(3).png", "gato"),
    setItem("Spray CatMyPet Cat Trainer", 39.90, 27.99, "https://www.petlove.com.br/images/products/230077/product/Spray_CatMyPet_Cat_Trainer_2345672_2.jpg", "gato"),
];

const roedoresCategoria = [
    setItem("Casinha Ecológica Recriar Pet Natural para Mini Coelho e Chinchila", 24.90, 22.41, "https://www.petlove.com.br/images/products/197701/product/Casinha_Ecol%C3%B3gica_Recriar_Pet_Natural_para_Mini_Coelho_e_Chinchila_1913258-1.jpg", "roedores"),
    setItem("Bebedouro Chalesco Drinker para Hamster - Azul", 10.90, 9.90, "https://www.petlove.com.br/images/products/200312/product/Bebedouro_Chalesco_Drinker_para_Hamster_-_Azul_3107613-1.jpg", "roedores"),
    setItem("Alimento Zootekna Pet Valle para Roedores Chinchilas e Porquinhos da Índia - 500 g", 15.10, 13.60, "https://www.petlove.com.br/images/products/214375/product/Alimento_Zootekna_Pet_Valle_para_Roedores_Chinchilas_e_Porquinhos_da_%C3%8Dndia_-_500_g_3104388.jpg", "roedores"),
    setItem("Alimento Zootekna PicNic Super Premium - 500 g", 16.55, 14.89, "https://www.petlove.com.br/images/products/214377/product/Alimento_Zootekna_PicNic_Super_Premium_-_500_g_310478.jpg", "roedores"),
    setItem("Tubo Nutricon Nutrihome para Hamsters", 41.79, 37.61, "https://www.petlove.com.br/images/products/189966/product/3110400-1.jpg", "roedores"),
    setItem("Comedouro NF Pet Pesado em Alumínio para Hamster", 10.90, 7.90, "https://www.petlove.com.br/images/products/206051/product/Comedouro_NF_Pet_Pesado_em_Alum%C3%ADnio_para_Hamster_-_50_mL_2202446_2.jpg", "roedores"),
];

const valePresenteCategoria = [
    setItem("Vale Presente - R$40", 40.00, null, "https://s3-sa-east-1.amazonaws.com/whitelabel-ecommerces/ecommerce/card_options/676/thumb/cart%C3%A3o_presente-5.jpg", "vale-presente"),
    setItem("Vale Presente - R$80", 80.00, null, "https://s3-sa-east-1.amazonaws.com/whitelabel-ecommerces/ecommerce/card_options/676/thumb/cart%C3%A3o_presente-5.jpg", "vale-presente"),
    setItem("Vale Presente - R$120", 120.00, null, "https://s3-sa-east-1.amazonaws.com/whitelabel-ecommerces/ecommerce/card_options/675/thumb/cart%C3%A3o_presente-4.jpg", "vale-presente"),
    setItem("Vale Presente - R$150", 150.00, null, "https://s3-sa-east-1.amazonaws.com/whitelabel-ecommerces/ecommerce/card_options/594/thumb/Diversos_01.jpg", "vale-presente"),
    setItem("Vale Presente - R$200", 200.00, null, "https://s3-sa-east-1.amazonaws.com/whitelabel-ecommerces/ecommerce/card_options/589/thumb/Novopet_02.jpg", "vale-presente"),
];

const produtos = [
    ...cachorroCategoria,
    ...gatoCategoria,
    ...roedoresCategoria,
    ...valePresenteCategoria
];

async function registerSomeProducts() {
    produtos.forEach(async produto => {
        const hasInfoInDatabase = await getDbInstance().collection("products").findOne({name: produto.name, category: produto.category});
        if (hasInfoInDatabase) return;
        await getDbInstance().collection("products").insertOne(produto);
    });
    console.log("Produtos inicializados com sucesso!");
}

export { registerSomeProducts };