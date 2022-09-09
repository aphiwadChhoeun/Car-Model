import { useState } from "react";

export default function useControlOptions() {
    const [state, setState] = useState({
        color: null,
        exhaust: null,
        accent: null,
        plastic: null
    })

    return [state, setState]
}