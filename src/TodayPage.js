import { useLocation } from "react-router-dom";

function TodayPage() {
    const location = useLocation()
    const Data = location.state 
    console.log(Data)
    return "oioioi,  e quem diria não é mesmo? chegamos até aqui sem grandes dificuldades"
}

export default TodayPage;