import donarSchema from './models/donar.model.js'

export async function Home(req,res){
    try{
        // console.log(req.body);


        const{...donar}=req.body;
        const {phone}=req.body;
        const check=await donarSchema.findOne({phone})
        console.log(check);

        if(!check){
        const data=await donarSchema.create({...donar});
         return res.status(201).send({msg:data});
        }
        return res.status(400).send({msg:"data exist"});




    }catch(error){
        res.status(404).send({msg:error})
    }
}
export  async function getDonars(req,res){
    try{
    const donars=await donarSchema.find();
    res.status(200).send(donars)
}catch(error){
    res.status(404).send({msg:error})
}
}

export async function getDonar(req,res){
    try{
        console.log(req.params);
        const {id}=req.params;
        const data=await donarSchema.findOne({_id:id});
        console.log(data);
        res.status(200).send(data);
    }catch(error){
        res.status(404).send(error)
    }
}