import express from "express";
const router = express.Router();
import Home from '../model/Home';

router.get("/", async (req, res) => {
        let homes = await Home.find();
        return res.render("pages/home", {homes});
})
/* --- NavTel--- */

router.get("/cours", async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/cours", {homes});
})
router.get("/addmiss", async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/admiss", {homes});
})
router.get("/IFIC",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/ific", {homes});
})
router.get("/press",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/press", {homes});



})
/* --- formation Prog --------*/
router.get("/Initiation",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/Prog/Initiation", {homes});
})
router.get("/Angular",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/Prog/Angular", {homes});
})
router.get("/React",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/Prog/React", {homes});
})
router.get("/javascript",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/Prog/javascript", {homes});
})
router.get("/Symfony",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/Prog/Symfony", {homes});
})

/* --- formation programation -------*/
router.get("/Initiation_C",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ic", {homes});
})
router.get("/Perfectionnement_C",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pc", {homes});
})
router.get("/Initiation",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ic+", {homes});
})
router.get("/Perfectionnement",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pc+", {homes});
})
router.get("/VB.Net",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/vb", {homes});
})
router.get("/Initiation_JAVA",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ijava", {homes});
})
router.get("/Perfectionnement_JAVA",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pjava", {homes});
})


/* --- BTP -------*/
router.get("/btp_Commerce_de_distribution",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Commerce/comm", {homes});
})
router.get("/btp_comptable-dentreprise",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Commerce/comptable", {homes});
})
router.get("/btp_informatioque_de_gestion",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Informatique/info", {homes});
})
router.get("/btp_maintenance_en_micro_systemes_informatiques_objectifs",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Informatique/mainte", {homes});
})
router.get("/btp_design_despace",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Art/design", {homes});
})
router.get("/btp_dessinateur_projeteur_en_architecture",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Art/dessinateur", {homes});
})
router.get("/btp_multimedia",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/btp/Informatique/multimedia", {homes});
})

/* --- BTS -------*/
/*--informatique--*/
router.get("/bts_informatique_de_gestion",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Informatique/info", {homes});
})
router.get("/bts_developpement",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Informatique/developpement", {homes});
})
router.get("/bts_reseaux_et_securite_informatique",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Informatique/reseaux", {homes});
})
/*--art--*/

router.get("/bts_design_despace",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Art/espace", {homes});
})
router.get("/bts_design_produit",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Art/produit", {homes});
})
/*--Commerce--*/

router.get("/bts_commerce_international",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Commerce/international", {homes});
})
router.get("/bts_comptabilite_et_finance",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Commerce/finance", {homes});
})
/*--Audiovisuel--*/

router.get("/bts_option_assistant_realisateur",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Audiovisuel/assistant", {homes});
})
router.get("/bts_option_montage_video",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Audiovisuel/montage", {homes});
})
router.get("/bts_option_prise_de_vue",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Audiovisuel/prise", {homes});
})
router.get("/bts_option_production",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Audiovisuel/production", {homes});
})
router.get("/bts_option_son",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/diplome/bts/Audiovisuel/son", {homes});
})



/* --- formation programation -------*/
router.get("/Initiation_C",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ic", {homes});
})
router.get("/Perfectionnement_C",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pc", {homes});
})
router.get("/Initiation",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ic+", {homes});
})
router.get("/Perfectionnement",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pc+", {homes});
})
router.get("/VB.Net",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/vb", {homes});
})
router.get("/Initiation_JAVA",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ijava", {homes});
})
router.get("/Perfectionnement_JAVA",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pjava", {homes});
})


/* ------- Langue Allemand -------*/
router.get("/All_av",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Allemand/allmendavancer", {homes});
})
router.get("/All_deb",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Allemand/allmenddeb", {homes});
})
router.get("/All_inter",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Allemand/allmendinter", {homes});
})


/* ------- Langue Anglais -------*/
router.get("/Ang_av",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Anglais/anglaisavance", {homes});
})
router.get("/Ang_deb",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Anglais/anglaisdeb", {homes});
})
router.get("/Ang_inter",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Anglais/anglaisinter", {homes});
})


/* ------- Langue Francais -------*/
router.get("/Fra_av",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Français/francaisAvance", {homes});
})
router.get("/Fra_deb",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Français/francaisdeb", {homes});
})
router.get("/Fra_inter",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Français/francaisninter", {homes});
})


/* ------- Langue Russia -------*/
router.get("/Rus_av",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Russia/russeavencer", {homes});
})
router.get("/Rus_deb",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Russia/russeinter", {homes});
})
router.get("/Rus_inter",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/langue/Russia/russiedet", {homes});
})

export default router;