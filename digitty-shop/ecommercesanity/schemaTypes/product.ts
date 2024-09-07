export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            title: "Name of product",
            type: "string"
        },
        {
            name: "images",
            type: "array",
            title: "Product Images",
            of: [{type: "image"}]
        },
        {
            name: "description",
            title: "Description of product",
            type: "text",
            options: {
                source: "name",
            }
            
        },
        {
            name: "slug",
            title: "Product Slug",
            type: "slug",
            option:{
                source: "name",
            }
            
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
            name: "categories",
            title: "Product Categories",
            type: "reference",
           to:[
            {
                type: "category"
            }
           ]
        }
    ]
}