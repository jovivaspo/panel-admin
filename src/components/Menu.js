import './Menu.css'
import MenuItem from './MenuItem'
import {FiUser} from 'react-icons/fi'
import {TbNotes} from 'react-icons/tb'


const Menu = ({ theme }) => {

    return (

        <ul className='menu'>
            <MenuItem theme={theme} link={'/usuarios'} text={'Usuarios'}  icon={<FiUser size={16}/>}/>
            <MenuItem theme={theme} link={'/notas'} text={'Notas'} icon={<TbNotes size={16}/>}/>
        </ul>

    )
}

export default Menu