import { v1, v3, v4, v5 } from 'uuid';

export function generate(version, quantity) {

    let result = '';

    for( let i = 0; i < quantity; i++ ) 
    {
        
        if( version == 1 ){

            result += v1() + '\n';

        }else if( version == 3 ){

            result += v3() + '\n';

        }else if( version == 4 ){

            result += v4() + '\n';

        }else if( version == 5 ){

            result += v5() + '\n';

        }

    }

    return result.slice(0, -1);
    
}