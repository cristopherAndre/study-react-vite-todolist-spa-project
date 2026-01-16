import Text from './components/text';
import TrashIcon from './assets/icons/trash.svg?react';


export default function App() {

    return (

        <div className="grid gap-3">
        
            <div className="flex flex-col gap-2">
                <Text variant="body-sm-bold" className="text-pink-base"> Hello, Worlds!</Text>

                <Text className="text-green-base"> Hello, Worlds!</Text>

                <Text variant="body-md-bold"> Hello, Worlds!</Text>
            </div>

            <div className="flex gap-1">
                <TrashIcon className='fill-pink-base'/>

            </div>

        </div>


    );

}