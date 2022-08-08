import Task from "./Task.js";
import { GetToday } from "../tools/UseAxios.js"
import Context from '../tools/Context.js';

import { useContext, useState, useEffect } from "react";


function Tasks({reload, setReload}) {
    const [profile] = useContext(Context);
    const [list, setList] = useState(null)
    

    function MappingTasks() {
        if(list !== null) {
            return (
                list.map((habit, index) => {
                    return <Task habit={habit} reload={reload} setReload={setReload} key={index} />
                })
            )
        }
    }

    useEffect(() => {
        GetToday(profile.token)
            .then((res) => {
                // console.log(res.data)
                setList(res.data)
            })
            .catch((error) => {
                console.log(error)
                alert(`Ops, operação não efetuada, erro ${error.response.status}`)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);
    
    return (
        <>
            {MappingTasks()}
        </>
    )
}

export default Tasks;