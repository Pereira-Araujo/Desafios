
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


import { SelectForm } from './style'

const FormComponent = (props) => {
    return (
        <FormControl>
            <InputLabel>{props.title}</InputLabel>
            <SelectForm
                defaultValue={""}
                onChange={props.callChange}>
                <MenuItem><u>{props.titleOption}</u></MenuItem>
                {props.Options}
            </SelectForm>
        </FormControl >
    )
}
export default FormComponent;