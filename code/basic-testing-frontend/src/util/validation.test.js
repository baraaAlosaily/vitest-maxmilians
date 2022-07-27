import { expect, it } from 'vitest';
import {validateStringNotEmpty,validateNumber} from './validation';

it('input have no length',()=>{
    const input='rahhal';

    const result1=validateStringNotEmpty(input);

    const result2=()=>{
        validateStringNotEmpty();
    }

    expect(result1).toBeUndefined();
    expect(result2).toThrow();
})