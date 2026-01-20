import Text from './components/text';
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from './components/icon';
import Badge from './components/badge';
import Button from './components/button';
import ButtonIcon from './components/button-icon';
import InputText from './components/input-text';
import InputCheckbox from './components/input-checkbox';
import Card from "./components/card";

export default function App() {

    return (

        <div className="grid gap-8">

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
            <div className="flex gap-1">
                <Badge>5</Badge>
                <Badge variant="secondary">2 de 5</Badge>
            </div>

            <div className="flex gap-1">
                <Button>Salvar</Button>
                <Button variant="primary" size="md" icon={PlusIcon}>Adicionar</Button>
                <Button disabled>Edit</Button>
            </div>

            <div className="flex gap-1">
                <ButtonIcon icon={TrashIcon} />
                <ButtonIcon icon={TrashIcon} disabled />

                <ButtonIcon icon={TrashIcon} variant="secondary" disabled />
                <ButtonIcon icon={TrashIcon} variant="secondary" />

                <ButtonIcon icon={TrashIcon} variant="tertiary" disabled />
                <ButtonIcon icon={TrashIcon} variant="tertiary" />
            </div>

            <div>
                <InputText />
            </div>

            <div>
                <InputCheckbox />
            </div>

            <div>
                <Card size="md">Olá mundo</Card>
            </div>



        </div>


    );

}
