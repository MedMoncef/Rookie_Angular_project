import BTS from '../model/BTS'

const createBTS = async (req, res) => {
    const bts = await BTS.create(req.body)
    return res.send(bts)
}

const getAllBTSs = async (req, res) => {
    const Informatique = await BTS.find({type: 'Informatique'})
    const art = await BTS.find({type: 'art'})
    const Commerce = await BTS.find({type: 'Commerce'})
    const Audiovisuel = await BTS.find({type: 'Audiovisuel'})
    return res.render("pages/diplome/bts",{Informatique,art,Commerce,Audiovisuel})
}

const getAllBTS = async (req, res) => {
    const bts = await BTS.find()
    return res.send(bts)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteBTS = async (req, res) => {
    const bts = await BTS.findByIdAndDelete(req.params.id);
    return res.send(bts);
}

const updateBTS = async (req, res) => {
    const bts = await BTS.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(bts);
}

export { createBTS, getAllBTS,deleteBTS,updateBTS,getAllBTSs }