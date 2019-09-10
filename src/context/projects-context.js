import React, {createContext, useContext} from 'react'
import {useProjects} from '../hooks'

/* Context passa informações pelos componentes sem a necessidade de utilizar Props
 * Por exemplo, você está no Header e deseja passar uma informação para um componente
 * que está 5 levels deep. Você pode passar essa informação por props e ir componente
 * a componente, porém isso seria muito feio/chato de fazer. Context faz isso melhor
 * Context é necessário pois projects serão adicionados em muitos momentos da aplicação
 */

export const ProjectsContext = createContext()
export const ProjectsProvider = ({children}) => {
    const {projects, setProjects} = useProjects()

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjectsValue = () => useContext(ProjectsContext)