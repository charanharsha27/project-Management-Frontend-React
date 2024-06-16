import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ProjectCard } from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProjects } from "@/Redux/Project/Action";

export const tags = ["all", "react", "nextjs", "springboot", "mysql", "mongodb", "nodejs", "expressjs", "django", "flask", "python", "java", "javascript", "typescript", "css", "html", "sass", "tailwindcss", "bootstrap", "materialui", "chakraui", "mui", "antdesign", "redux", "mobx", "contextapi", "graphql", "apollo", "restapi", "socketio", "websockets", "docker", "kubernetes", "aws", "gcp", "azure", "heroku", "netlify", "vercel", "firebase", "auth0", "passportjs", "jwt", "oauth", "stripe", "paypal"];
export const categories = ["All", "Frontend", "Backend", "Fullstack", "Mobile", "Desktop"];
const ProjectList = () => {
    const {project,auth} = useSelector(store=>store);
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProjects({}));
    },[auth.jwt,auth.user])
    const HandleFilterChange = (category, value) => {
        // dispatch(fetchProjects({ [category]: value }));
        if(category === "category"){
            if(value === "All"){
                dispatch(fetchProjects({}));
                return;
            }
            dispatch(fetchProjects({category : value}));
        }

        if(category === "tag"){
            if(value === "all"){
                dispatch(fetchProjects({}));
                return;
            }
            dispatch(fetchProjects({tag : value}));
        }
            
        console.log("Filter Changed ->", value,category);
    }

    const HandleSearchChange = (e)=>{
        setKeyword(e.target.value);
        console.log("Search updated");
        dispatch(searchProjects(e.target.value));
    }
    // console.log("------",project);
    return (
        <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
            <section className="filterSection">

                <Card className="p-5 sticky top-10">
                    {/* Creating the filter along the icon beside it */}
                    <div className="flex justify-between lg:w-[20rem]">
                        <p className="text-xl -tracking-wider">Filters</p>
                        <Button variant='ghost' size='icon'>
                            <MixerHorizontalIcon />
                        </Button>
                    </div>

                    {/* Keeping the card content */}
                    <CardContent className='mt-5'>
                        {/* Insert the scroll area */}
                        <ScrollArea className="space-y-7 h-[70vh]">
                            
                                <div>
                                    <h1 className="pb-3 text-gray-300 border-b text-center">Categories</h1>
                                    <div className="pt-5">
                                        {/* Using the radio component */}
                                        <RadioGroup defaultValue="all" onValueChange={(value) => HandleFilterChange("category", value)}>   
                                            {categories.map(item => (
                                                    <div key={item} className="flex items-center gap-3">
                                                        {/* Placing the radio items */}
                                                        <RadioGroupItem value={item} id={`r0-${item}`} />
                                                        <Label htmlFor={`r0-${item}`}>{item}</Label>
                                                    </div>
                                                ))}
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="pt-9">
                                    <h1 className="pb-3 text-gray-300 border-b text-center">Tags</h1>
                                    <div className="pt-5">
                                        {/* Using the radio component */}
                                        <RadioGroup defaultValue="all" onValueChange={(value) => HandleFilterChange("tag", value)}>
                                            {tags.map(item => (
                                                <div key={item} className="flex items-center gap-3">
                                                    {/* Placing the radio items */}
                                                    <RadioGroupItem value={item} id={`r1-${item}`} />
                                                    <Label htmlFor={`r1-${item}`}>{item}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

            </section>

            <section className="projectsListSection w-full lg:w-[55rem]">
                {/* Project list content here */}

                <div className="flex gap-2 items-center pb-5 justify-between">
                    {/* Search box */}
                    <div className="relative p-0 w-full">

                        <Input className="40% px-9" 
                            placeholder="Search Projects"
                            onChange={HandleSearchChange}
                        />
                        <MagnifyingGlassIcon className="absolute top-3 left-4" />

                    </div>
                    
                </div>
                
                {/* Display projects*/}
                <div>
                    <div className="space-y-5 min-h-[74vh]">

                        {
                            keyword?project.searchProjects?.map((item) => <ProjectCard key={item.id+7} item={item} />)
                            :project.projects?.map((item) => <ProjectCard key={item.id} item={item} />)
                        }     
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectList;
