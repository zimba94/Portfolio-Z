
export interface Project{
    id: number,
    image_path: string,
    name: string,
    description: string,
    skills: number[],
    redirecTo: string
}

export interface Skill{
  id: number,
  image_path: string,
  name: string,
  level: string
}