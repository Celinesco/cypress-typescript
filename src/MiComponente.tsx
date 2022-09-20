
interface Props {
    name: string
}


const MiComponente: React.FC<Props> = ({ name }) => {
    return (
        <div data-cy='bienvenida'>Hola {name}</div>
    )
}

export default MiComponente;