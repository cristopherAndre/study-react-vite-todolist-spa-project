import Text from './components/text';
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from './components/icon';

export default function App() {

    return (

        <div className="grid gap-3">
        
            <div className="flex flex-col gap-2">
                <Text variant="body-sm-bold" className="text-pink-base"> Hello, Worlds!</Text>

                <Text className="text-green-base"> Hello, Worlds!</Text>

                <Text variant="body-md-bold"> Hello, Worlds!</Text>
            </div>

            <div className="flex gap-1">

                <Icon svg={TrashIcon} className="fill-green-base" />
                <Icon svg={CheckIcon} />
                <Icon svg={PlusIcon} />
                <Icon svg={PencilIcon} />
                <Icon svg={XIcon} />           
                <Icon svg={SpinnerIcon} animate />
                <Icon svg={SpinnerIcon} animate={true} />
                <Icon svg={SpinnerIcon} animate={false} />                     

            </div>

        </div>


    );

}