import { useState, useCallback, type ChangeEvent } from 'react';

interface UseInputsReturn<T> {
    form: T;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
}

export function useInputs<T>(initialForm: T): UseInputsReturn<T> {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }, []);

    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return { form, onChange, reset };
}
