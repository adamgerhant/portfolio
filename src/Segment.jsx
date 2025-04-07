import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { generateClient } from 'aws-amplify/api';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { FaMedium } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const client = generateClient();

const getRequestFromPreset = (preset)=>{
        return(
            {
            getAbout:{
                selected:preset=="about"?true:false, 
                variables:{aboutId:"5967d8f9-b2bc-4ca1-92be-47e00d518cd5"}, 
                id:{selected:false},
                Title:{selected:preset=="about"?true:false},
                Portrait:{
                    selected: preset=="about"?true:false, 
                    id:{selected:false},
                    icon:{selected:preset=="about"?true:false},
                    url:{selected:preset=="about"?true:false},
                    createdAt:{selected:false},
                    updatedAt:{selected:false},
                },
                About:{selected:preset=="about"?true:false},
                Socials:{
                    selected:preset=="about"?true:false,
                    id:{selected:false},
                    icon:{selected:preset=="about"?true:false},
                    url:{selected:preset=="about"?true:false},
                    createdAt:{selected:false},
                    updatedAt:{selected:false},
                },
                Contact:{selected:preset=="about"?true:false},
                createdAt:{selected:false},
                updatedAt:{selected:false},
            },
            getWebDevelopment:{
                selected:preset=="webapps"?true:false,
                variables:{webDevelopmentId:"49d3a8f0-0537-4bfd-a759-5b4a948a7ec8"},
                id:{selected:false},
                description: {selected:false},
                projects:{ 
                    selected:preset=="webapps"?true:false,
                    id:{selected:false},
                    name:{selected:preset=="webapps"?true:false},
                    url:{selected:preset=="webapps"?true:false},
                    about:{selected:preset=="webapps"?true:false},
                    images:{
                        selected:preset=="webapps"?true:false,
                        id:{selected:false},
                        icon:{selected:preset=="webapps"?true:false},
                        url:{selected:preset=="webapps"?true:false},
                        createdAt:{selected:false},
                        updatedAt:{selected:false},
                    },
                    createdAt:{selected:true},
                    updatedAt:{selected:false},
                },
                createdAt:{selected:false},
                updatedAt:{selected:false},
            },
            listExperiences:{
                selected:preset=="experience"?true:false,
                id:{selected:false},
                title:{selected:preset=="experience"?true:false},
                company:{selected:preset=="experience"?true:false},
                date:{selected:preset=="experience"?true:false},
                about:{selected:preset=="experience"?true:false},
                images:{
                    selected:preset=="experience"?true:false,
                    id:{selected:false},
                    icon:{selected:preset=="experience"?true:false},
                    url:{selected:preset=="experience"?true:false},
                    createdAt:{selected:false},
                    updatedAt:{selected:false},
                },
                createdAt:{selected:preset=="experience"?true:false},
                updatedAt:{selected:false},
            },
            listArticles:{
                selected:preset=="articles"?true:false,
                id:{selected:false},
                title: {selected:preset=="articles"?true:false},
                image:{
                    selected: preset=="articles"?true:false, 
                    id:{selected:false},
                    icon:{selected:false},
                    url:{selected:preset=="articles"?true:false},
                    createdAt:{selected:false},
                    updatedAt:{selected:false},
                },
                summary: {selected:preset=="articles"?true:false},
                url: {selected:preset=="articles"?true:false},
                createdAt: {selected:false}, 
                updatedAt: {selected:false}, 
            },
            getProgrammingProjects:{
                selected:preset=="programming"?true:false,
                variables:{programmingProjectsId:"d446ca15-93ec-40b3-b920-0678c382c5e4"},
                id:{selected:false},
                description:{selected:false},
                projects:{
                    selected:preset=="programming"?true:false,
                    id:{selected:false},
                    name:{selected:preset=="programming"?true:false},
                    url:{selected:preset=="programming"?true:false},
                    about:{selected:preset=="programming"?true:false},
                    images:{
                        selected:preset=="programming"?true:false,
                        id:{selected:false},
                        icon:{selected:preset=="programming"?true:false},
                        url:{selected:preset=="programming"?true:false},
                        createdAt:{selected:false},
                        updatedAt:{selected:false},
                    },
                    createdAt:{selected:false},
                    updatedAt:{selected:false},
                },
                createdAt: {selected:false}, 
                updatedAt: {selected:false}, 
            },
            getEngineeringProjects:{
                selected:preset=="engineering"?true:false,
                variables:{engineeringProjectsId:"53601ba9-9495-4ace-9dcc-0103e8e1710c"},
                id:{selected:false},
                description:{selected:true},
                projects:{
                    selected:preset=="engineering"?true:false,
                    id:{selected:false},
                    name:{selected:preset=="engineering"?true:false},
                    url:{selected:preset=="engineering"?true:false},
                    about:{selected:preset=="engineering"?true:false},
                    images:{
                        selected:preset=="engineering"?true:false,
                        id:{selected:false},
                        icon:{selected:preset=="engineering"?true:false},
                        url:{selected:preset=="engineering"?true:false},
                        createdAt:{selected:false},
                        updatedAt:{selected:false},
                    },
                    createdAt:{selected:false},
                    updatedAt:{selected:false},
                },
                createdAt: {selected:false}, 
                updatedAt: {selected:false}, 
            },
            }
        )
}
const getStringFromRequest = (request) =>{
    const newRequestString = `
    ${request.getAbout?.selected?`
        query getAbout($aboutId: ID!) {
            getAbout(id: $aboutId) {
                ${request.getAbout.id.selected? "id" : ""}
                ${request.getAbout.Title.selected?"Title" : ""}
                ${request.getAbout.Portrait.selected?`
                Portrait {
                    ${request.getAbout.Portrait.id.selected?"id" : ""}
                    ${request.getAbout.Portrait.icon.selected?"icon" : ""}
                    ${request.getAbout.Portrait.url.selected?"url" : ""}
                    ${request.getAbout.Portrait.createdAt.selected?"createdAt" : ""}
                    ${request.getAbout.Portrait.updatedAt.selected?"updatedAt" : ""}
                }
                `:""}
                ${request.getAbout.About.selected?"About":""}
                ${request.getAbout.Socials.selected?`
                Socials {
                    items{
                        ${request.getAbout.Socials.id.selected?"id":""}
                        ${request.getAbout.Socials.icon.selected?"icon":""}
                        ${request.getAbout.Socials.url.selected?"url":""}
                        ${request.getAbout.Socials.createdAt.selected?"createdAt":""}
                        ${request.getAbout.Socials.updatedAt.selected?"updatedAt":""}
                    }
                }
                `:""}
                ${request.getAbout.Contact.selected?"Contact":""}
                ${request.getAbout.createdAt.selected?"createdAt":""}
                ${request.getAbout.updatedAt.selected?"updatedAt":""}
            }
            
        }
        `:""}
    ${request.listExperiences?.selected?`
        query ListExperiences {
            listExperiences {
                    items{
                        ${request.listExperiences.id.selected?"id":""}
                        ${request.listExperiences.title.selected?"title":""}
                        ${request.listExperiences.company.selected?"company":""}
                        ${request.listExperiences.date.selected?"date":""}
                        ${request.listExperiences.about.selected?"about":""}
                        ${request.listExperiences.images.selected?`
                        images {
                            items { 
                                ${request.listExperiences.images.id.selected?"id":""}
                                ${request.listExperiences.images.icon.selected?"icon":""}
                                ${request.listExperiences.images.url.selected?"url":""}
                                ${request.listExperiences.images.createdAt.selected?"createdAt":""}
                                ${request.listExperiences.images.updatedAt.selected?"updatedAt":""}
                            }
                        }
                        `:""} 
                        ${request.listExperiences.createdAt.selected?"createdAt":""}
                        ${request.listExperiences.updatedAt.selected?"updatedAt":""}
                    }
                }
            }
        `:""}
    ${request.getProgrammingProjects?.selected?`
        query GetProgrammingProjects($programmingProjectsId: ID!) {
            getProgrammingProjects(id: $programmingProjectsId) {
                ${request.getProgrammingProjects.id.selected?"id":""}
                ${request.getProgrammingProjects.description.selected?"description":""}
                ${request.getProgrammingProjects.projects.selected?`
                projects {
                    items {
                        ${request.getProgrammingProjects.projects.id.selected?"id":""} 
                        ${request.getProgrammingProjects.projects.name.selected?"name":""} 
                        ${request.getProgrammingProjects.projects.url.selected?"url":""} 
                        ${request.getProgrammingProjects.projects.about.selected?"about":""} 
                        ${request.getProgrammingProjects.projects.images.selected?`
                        images {
                            items { 
                                ${request.getProgrammingProjects.projects.images.id.selected?"id":""}
                                ${request.getProgrammingProjects.projects.images.icon.selected?"icon":""}
                                ${request.getProgrammingProjects.projects.images.url.selected?"url":""}
                                ${request.getProgrammingProjects.projects.images.createdAt.selected?"createdAt":""}
                                ${request.getProgrammingProjects.projects.images.updatedAt.selected?"updatedAt":""}
                            }
                        }
                        `:""} 
                        ${request.getProgrammingProjects.projects.createdAt.selected?"createdAt":""} 
                        ${request.getProgrammingProjects.projects.updatedAt.selected?"updatedAt":""} 
                    }
                }
            `:""}
            ${request.getProgrammingProjects.createdAt.selected?"createdAt":""}
            ${request.getProgrammingProjects.updatedAt.selected?"updatedAt":""}
            }
        }
        `:""}
    ${request.getEngineeringProjects?.selected?`
        query GetEngineeringProjects($engineeringProjectsId: ID!) {
            getEngineeringProjects(id: $engineeringProjectsId) {
                ${request.getEngineeringProjects.id.selected?"id":""}
                ${request.getEngineeringProjects.description.selected?"description":""}
                ${request.getEngineeringProjects.projects.selected?`
                projects {
                    items {
                        ${request.getEngineeringProjects.projects.id.selected?"id":""} 
                        ${request.getEngineeringProjects.projects.name.selected?"name":""} 
                        ${request.getEngineeringProjects.projects.url.selected?"url":""} 
                        ${request.getEngineeringProjects.projects.about.selected?"about":""} 
                        ${request.getEngineeringProjects.projects.images.selected?`
                        images {
                            items { 
                                ${request.getEngineeringProjects.projects.images.id.selected?"id":""}
                                ${request.getEngineeringProjects.projects.images.icon.selected?"icon":""}
                                ${request.getEngineeringProjects.projects.images.url.selected?"url":""}
                                ${request.getEngineeringProjects.projects.images.createdAt.selected?"createdAt":""}
                                ${request.getEngineeringProjects.projects.images.updatedAt.selected?"updatedAt":""}
                            }
                        }
                        `:""} 
                        ${request.getEngineeringProjects.projects.createdAt.selected?"createdAt":""} 
                        ${request.getEngineeringProjects.projects.updatedAt.selected?"updatedAt":""} 
                    }
                }
            `:""}
            ${request.getEngineeringProjects.createdAt.selected?"createdAt":""}
            ${request.getEngineeringProjects.updatedAt.selected?"updatedAt":""}
            }
        }
        `:""}
    ${request.getWebDevelopment?.selected?`
        query GetWebDevelopment($webDevelopmentId: ID!) {
            getWebDevelopment(id: $webDevelopmentId) {
                ${request.getWebDevelopment.id.selected?"id":""}
                ${request.getWebDevelopment.description.selected?"description":""}
                ${request.getWebDevelopment.projects.selected?`
                projects {
                    items {
                        ${request.getWebDevelopment.projects.id.selected?"id":""} 
                        ${request.getWebDevelopment.projects.name.selected?"name":""} 
                        ${request.getWebDevelopment.projects.url.selected?"url":""} 
                        ${request.getWebDevelopment.projects.about.selected?"about":""} 
                        ${request.getWebDevelopment.projects.images.selected?`
                        images {
                            items { 
                                ${request.getWebDevelopment.projects.images.id.selected?"id":""}
                                ${request.getWebDevelopment.projects.images.icon.selected?"icon":""}
                                ${request.getWebDevelopment.projects.images.url.selected?"url":""}
                                ${request.getWebDevelopment.projects.images.createdAt.selected?"createdAt":""}
                                ${request.getWebDevelopment.projects.images.updatedAt.selected?"updatedAt":""}
                            }
                        }
                        `:""} 
                        ${request.getWebDevelopment.projects.createdAt.selected?"createdAt":""} 
                        ${request.getWebDevelopment.projects.updatedAt.selected?"updatedAt":""} 
                    }
                }
            `:""}
            ${request.getWebDevelopment.createdAt.selected?"createdAt":""}
            ${request.getWebDevelopment.updatedAt.selected?"updatedAt":""}
            }
        }
        `:""}
    ${request.listArticles?.selected?`
        query ListArticles {
            listArticles {
                    items{
                        ${request.listArticles.id.selected?"id":""}
                        ${request.listArticles.title.selected?"title":""}
                        ${request.listArticles.image.selected?`
                        ${request.listArticles.summary.selected?"summary":""}
                        ${request.listArticles.url.selected?"url":""}
                        image {
                            ${request.listArticles.image.id.selected?"id" : ""}
                            ${request.listArticles.image.icon.selected?"icon" : ""}
                            ${request.listArticles.image.url.selected?"url" : ""}
                            ${request.listArticles.image.createdAt.selected?"createdAt" : ""}
                            ${request.listArticles.image.updatedAt.selected?"updatedAt" : ""}
                        }
                        `:""}
                        ${request.listArticles.createdAt.selected?"createdAt":""}
                        ${request.listArticles.updatedAt.selected?"updatedAt":""}
                    }
                }
            }
        `:""}
    `
    const processedRequestString = newRequestString
        .split('\n')
        .map(line => line.slice(8))
        .filter(line => /\S/.test(line)) // Remove lines without characters
        .join('\n');
        
    return processedRequestString;

}
const ImageSlider = ({images}) =>{
    const [index, setIndex] = useState(0);
    if(images[index]==null){
        return null
    }
    return(
        <div className="flex flex-col items-center justify-between w-full">
            <img className="my-4 max-h-[320px]" src={images[index].url}/>
            {images.length>1&&
            <div className="flex">
                <FaChevronLeft className="mx-2 p-1 bg-white text-black rounded h-7 w-7 cursor-pointer"
                onClick={() => setIndex((prevIndex) => {
                    const newIndex = (prevIndex - 1 + images.length) % images.length;
                    return newIndex;
                })}/>
                <FaChevronRight className="mx-2 p-1 bg-white text-black rounded h-7 w-7 cursor-pointer"
                onClick={() => setIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % images.length;
                    return newIndex;
                  })}/>
            </div>
            }
        </div>
    )
}
const Segment = ({preset}) =>{
    const [editTab, setEditTab] = useState("Request")
    const [response, setResponse] = useState({})
    const [request, setRequest] = useState(getRequestFromPreset(preset))

    const makeRequest = async (requestString) =>{
        setResponse({})
        if(requestString){
            try{
                const response = await client.graphql({
                    query: requestString,
                    variables: {
                        aboutId: request.getAbout?.variables.aboutId,
                        experienceId: request.getExperience?.variables.experienceId,
                        programmingProjectsId: request.getProgrammingProjects?.variables.programmingProjectsId,
                        engineeringProjectsId: request.getEngineeringProjects?.variables.engineeringProjectsId,
                        webDevelopmentId: request.getWebDevelopment?.variables.webDevelopmentId,
                    }
                })
                setResponse(response)

            }
            catch (err) {
                setResponse(err)
                console.log(err)
            }
        }
    }

    useEffect(()=>{
        setRequest(getRequestFromPreset(preset))
        makeRequest(getStringFromRequest(getRequestFromPreset(preset)))
    },[preset])

    const renderNode = (node, path)=>{
        return(
            <div className="ml-5 ">
                {Object.keys(node).map((key, index)=>{
                    if(key=="variables"){
                        return(<div className="no-wrap">Variables: {JSON.stringify(node[key])}</div>)
                    }
                    else if(key!="selected"){
                        return(
                            <div>
                                <div className="text-white flex items-center cursor-pointer" key={index} onClick={()=>setRequest(prevRequest=>{
                                    const newObj = {...prevRequest}
                                    let currentNode = newObj
                                    path.forEach(pathKey=>{
                                        currentNode = currentNode[pathKey]
                                    })
                                    currentNode[key].selected = !currentNode[key].selected
                                    return newObj
                                })}>
                                    {Object.keys(node[key]).length>1&&(node[key].selected?<AiFillCaretDown className="w-[15px] h-[15px]" />:<AiFillCaretRight className="w-[15px] h-[15px]"/>)}
                                    {Object.keys(node[key]).length==1&&<input type="checkbox" checked={node[key].selected}/>}
                                    <p className="ml-1">{key}</p>

                                </div>

                                {node[key].selected&&renderNode(node[key], [...path, key])}
                            </div> 
                        )
                    }
                })
                }
            </div>
            
        )
        
    }
    
    const responseText = JSON.stringify(response, null, 2)
    return( 
        <div className="px-20 p-10 w-full flex">
            <div className={`${preset=="about"?"h-[400px]":"min-h-[530px]"} w-[40%] flex shrink-0 rounded border border-white shadow-[0_0_10px_0px_rgba(255,255,255,0.25)]`}>
                <div className="text-white w-[45%] relative flex flex-col">
                    <div className="text-xl border-b b-white flex items-center ">
                        <div className={`px-2 py-1 w-1/2 text-[18px] text-center cursor-pointer ${editTab=="Request"?"bg-white text-slate-950 font-semibold":""}`} onClick={()=>setEditTab("Request")}>
                            Request preview
                        </div>
                        <div className={`px-2 py-1 w-1/2 text-[18px] text-center cursor-pointer  border-white ${editTab=="Editor"?"bg-white text-slate-950 font-semibold border-r":""}`} onClick={()=>setEditTab("Editor")}>
                            Request editor
                        </div>
                    </div>
                    {editTab=="Request"&&
                    <div className="overflow-y-auto flex-grow">
                        {//requestString.split('\n').map((line, index)=><div index={index}>{line}</div>)
                        }
                        <pre className="text-sm">
                            {getStringFromRequest(request)}
                        </pre>
                    </div>
                    }
                {editTab=="Editor"&&
                    <div className="overflow-auto flex-grow items-center justify-center ml-[-10px]">
                        {renderNode(request, [])}
                    </div>}
                    <div className=" w-full bottom-0 cursor-pointer flex items-center justify-center bg-green-500 text-white" onClick={()=>makeRequest(getStringFromRequest(request))}>
                        <div className="pl-3 font-semibold text-lg" >
                            Send Request
                        </div>
                        <AiFillCaretRight className=" h-[35px] mb-[-3px] ml-1"/>
                    </div>
                    

                </div>
                
                <div className="flex flex-col text-white border-l border-white flex-grow w-1/2 ">
                    <div className="text-[18px] border-b b-white flex items-center justify-center w-full text-center px-2 py-1 ">
                        Response
                    </div>
                    <div className="flex-grow overflow-auto">
                        {responseText=="{}"&&
                            <div className="flex items-center justify-center h-full">
                                Loading...
                            </div>}
                 
                        {responseText!="{}"&&!responseText.hasOwnProperty("Error")&&
                            <pre className="text-sm">
                                {responseText}
                            </pre>
                        }
                    </div>
                    
                </div>
            </div>
            <div className={`${preset=="about"?"h-[420px]":"min-h-[530px]"} flex-1 flex-grow overflow-y-auto text-white text-semibold text-xl ml-[100px] rounded shadow-2x border border-white shadow-[0_0_10px_0px_rgba(255,255,255,0.25)]`}>
            {response.data&&Object.keys(response.data).map(firstKey=>{
                if(!response.data[firstKey]){
                    return null
                }
                if(firstKey=="getAbout"){
                    return Object.keys(response.data.getAbout).map((key, index)=>{
                        if(key=="Title"){
                            const [name, description] = response.data.getAbout[key].split('\\n');
                            return(
                                <div key={index} className="flex items-center my-2 px-6">
                                    <p className="text-2xl w-[110px]">{key}</p>
                                    <div>
                                        <div className="text-5xl ">{name}</div>
                                        <div className="text-2xl font-bold">{description}</div>
                                    </div>
                                </div>
                            )
                        }

                        if(key=="Portrait"){
                            return(
                                <div key={index} className="flex items-center my-4 px-6">
                                    <p className="text-2xl w-[110px] shrink-0">Portrait</p>

                                    <img src={response.data.getAbout[key].url} className=" h-[80px] w-[80px] rounded-full"/>
                                </div>
                            )
                        }
                        if(key=="About"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">About</p>
                                <div>
                                    <div className="text-lg">{response.data.getAbout[key]}</div>
                                </div>
                            </div>
                            )
                        }
                        if(key=="Socials"){
                            return (
                                <div className="flex items-center my-4 px-6">
                                    <p className="text-2xl w-[110px] shrink-0">Socials</p>
                                    <div className="flex">

                                    {response.data.getAbout[key]?.items.map((socialItem, index)=>( 
                                        <a key={index} href={socialItem.url} target="_blank" rel="noopener">
                                            {socialItem.icon=="github"&&<FaGithub className="h-8 w-8 cursor-pointer mx-3"/>}
                                            {socialItem.icon=="linkedin"&&<FaLinkedin className="h-8 w-8 cursor-pointer mx-3"/>}
                                            {socialItem.icon=="medium"&&<FaMedium  className="h-8 w-8 cursor-pointer mx-3"/>}
                                        </a>
                                    ))}
                                    
                                </div>
                            </div>
                            )
                        }
                        if(key=="Contact"){
                            return(
                                <div className="flex items-center my-4 px-6">
                                    <p className="text-2xl w-[110px] shrink-0">Contact</p>
                                    <div>
                                        <div className="text-xl">{response.data.getAbout[key]}</div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                if(firstKey=="listExperiences"){
                    return (response.data.listExperiences.items.sort((a,b)=>a.createdAt.localeCompare(b.createdAt)).map((experience, experienceIndex)=>(
                        Object.keys(experience).map((key, index)=>{
                            if(key=="title"){
                                return(
                                    <div key={index} className={`flex items-baseline mb-2 px-6 ${experienceIndex==0?"mt-4":"mt-10"}`}>
                                        <p className="text-xl w-[120px]">Title</p>
                                        <div>
                                            <div className="text-3xl ">{experience[key]}</div>
                                        </div>
                                    </div>
                                )
                            }
                            if(key=="company"){
                                return(
                                    <div key={index} className="flex items-baseline my-2 px-6">
                                        <p className="text-xl w-[120px]">Company</p>
                                        <div>
                                            <div className="text-lg">{experience[key]}</div>
                                        </div>
                                    </div>
                                )
                            }
                            if(key=="date"){
                                return(
                                    <div key={index} className="flex items-baseline my-2 px-6">
                                        <p className="text-xl w-[120px] shrink-0">Date</p>
                                        <div className="text-xl">{experience[key]}</div>
                                    </div>
                                )  
                            }
                            if(key=="about"){
                                return(
                                    <div key={index} className="flex items-baseline my-2 px-6">
                                        <p className="text-xl w-[120px] shrink-0">About</p>
                                        <div className="text-lg">{experience[key].replace(/\\n/g, '\n').split('\n').map((line, i) => <><span key={i}>{line}</span><br/></>)}</div>
                                    </div>
                                )  
                            }
                            if(key=="images"&&experience[key]?.items?.length>0){
                                return(
                                <div key={index} className="flex items-top my-4 px-6">
                                    <p className="text-2xl w-[110px] shrink-0">Images</p>
                                    <ImageSlider images={experience[key]?.items.sort((a,b)=>a.icon.localeCompare(b.icon))}/>
                                </div>
                                )
                            }

                        })
                    )))
                }
                if(firstKey=="getProgrammingProjects"){
                    return (
                       <>
                        {response.data.getProgrammingProjects.description&&
                        <div className="flex items-center my-4 px-6">
                            <p className="text-xl w-[110px] shrink-0">Description</p>
                            <div className="text-xl">{response.data.getProgrammingProjects?.description}</div>
                        </div>
                        }
                        {response.data.getProgrammingProjects.projects.items.sort((a, b) => b.name.localeCompare(a.name)).map(project=>(Object.keys(project).map((key, index)=>{
                        if(key=="name"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px]">Name</p>
                                <div className="text-4xl">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="url"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px]">Url</p>
                                <a href={project[key]} target="_blank" rel="noopener">
                                    <div className="text-xl text-blue-400 underline">{project[key].slice(8)}</div>
                                </a>
                            </div>
                            )
                        }
                        if(key=="about"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">About</p>
                                <div className="text-lg">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="usage"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">Usage</p>
                                <div className="text-lg">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="images"){
                            return(
                            <div key={index} className="flex items-top my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">Images</p>
                                <ImageSlider images={project[key].items.sort((a, b) => a.icon.localeCompare(b.icon))}/>
                            </div>
                            )
                        }})))}
                        </>
                    )
                }
                if(firstKey=="getEngineeringProjects"){
                    return (response.data.getOpenSource.projects.items.sort((a, b) => b.name.localeCompare(a.name)).map(project=>(Object.keys(project).map((key, index)=>{
                        if(key=="name"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px]">Name</p>
                                <div className="text-4xl">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="url"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px]">Url</p>
                                <a href={project[key]} target="_blank" rel="noopener">
                                    <div className="text-xl text-blue-400 underline">{project[key].slice(8)}</div>
                                </a>
                            </div>
                            )
                        }
                        if(key=="about"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">About</p>
                                <div className="text-lg">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="usage"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">Usage</p>
                                <div className="text-lg">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="images"){
                            return(
                            <div key={index} className="flex items-top my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">Images</p>
                                <ImageSlider images={project[key].items}/>
                            </div>
                            )
                        }
                    }))))
                }
                if(firstKey=="getWebDevelopment"){
                    return (response.data.getWebDevelopment?.projects?.items.sort((a, b) => a.name.localeCompare(b.name)).map(project=>(Object.keys(project).map((key, index)=>{
                        if(project[key]==null){
                            return null
                        }
                        if(key=="name"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px]">Name</p>
                                <div className="text-4xl">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="url"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px]">Url</p>
                                <a href={project[key]} target="_blank" rel="noopener">
                                    <div className="text-xl text-blue-400 underline">{project[key].slice(8)}</div>
                                </a>
                            </div>
                            )
                        }
                        if(key=="about"){
                            return(
                            <div key={index} className="flex items-center my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">About</p>
                                <div className="text-lg">{project[key]}</div>
                            </div>
                            )
                        }
                        if(key=="images"){
                            return(
                            <div key={index} className="flex items-top my-4 px-6">
                                <p className="text-2xl w-[110px] shrink-0">Images</p>
                                <ImageSlider images={project[key]?.items.sort((a,b)=>a.icon.localeCompare(b.icon))}/>
                            </div>
                            )
                        }
                    }))))
                }
                
                if(firstKey=="listArticles"){
                    return (response.data.listArticles.items.map(article=>(
                        Object.keys(article).map((key, index)=>{
                            if(key=="title"){
                                return(
                                    <div key={index} className="flex items-center my-4 ml-6">
                                        <p className="text-2xl w-[115px] shrink-0">Title</p>
                                        <div className="text-3xl">{article[key]}</div>
                                    </div>
                                )
                            }
                            
                            if(key=="summary"){
                                return(
                                    <div key={index} className="flex items-center my-4 ml-6">
                                        <p className="text-2xl w-[115px] shrink-0">Summary</p>
                                        <div className="text-lg">{article[key]}</div>
                                    </div>
                                )
                            }
                            if(key=="url"){
                                return(
                                    <div key={index} className="flex items-center my-4 px-6">
                                        <p className="text-2xl w-[115px] shrink-0">Url</p>
                                        <a href={article[key]} target="_blank" rel="noopener">
                                            <div className="text-xl text-blue-400 underline">{article[key].slice(8)}</div>
                                        </a>
                                    </div>
                                )  
                            }
                            if(key=="image"){
                                return(
                                    <div key={index} className="flex items-center mb-8 my-4 ml-6">
                                        <p className="text-2xl w-[115px] shrink-0">Image</p>
                                        <div className="text-xl">                                
                                            <ImageSlider images={[article[key]]}/>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    )))

                }
               
               
            })
            }     
            </div>
        </div>
        
    )
}
export default Segment;