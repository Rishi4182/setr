import React, { useState } from 'react';

const Fibonacci: React.FC = () => {
    const [input, setInput] = useState<number | ''>('');
    const [sequence, setSequence] = useState<number[]>([]);

    const generateFibonacci = (n: number) => {
        const fib: number[] = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib.slice(0, n);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (typeof input === 'number' && input > 0) {
            setSequence(generateFibonacci(input));
        }
    };

    return (
        <div>
            <h2>Fibonacci Sequence Generator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(Number(e.target.value))}
                    placeholder="Enter a number"
                />
                <button type="submit">Generate</button>
            </form>
            <div>
                <h3>Generated Sequence:</h3>
                <p>{sequence.join(', ')}</p>
            </div>
        </div>
    );
};

export default Fibonacci;