import { useContext } from 'react'
import { useHistory } from 'react-router';
import useProtectedPage from "../../hooks/useProtectedPage";
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlusIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ListIcon from '@material-ui/icons/FormatListBulletedOutlined';
import { ButtonOption, MenuOption } from './style'
import GlobalStateContext from "../../global/GlobalStateContext";



const MenuComponent = (props) => {
    const { anchorEl, setAnchorEl } = useContext(GlobalStateContext);


    useProtectedPage()
    const history = useHistory()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <ButtonOption onClick={handleClick}>
                {props.buttonTitle}
            </ButtonOption>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuOption onClick={() => { props.callPageOne(history) }}>
                    <ListItemIcon>
                        <ListIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={props.titleLinkOne} />
                </MenuOption>
                <MenuOption onClick={() => { props.callPageTwo(history) }}>
                    <ListItemIcon>
                        <PlusIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={props.titleLinkTwo} />
                </MenuOption>

            </Menu>
        </>

    );
};
export default MenuComponent;