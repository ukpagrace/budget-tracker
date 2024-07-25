export const Currencies = [
    {value: "NGN", label: "₦ Naira", locale: "en-NG"},
    {value: "USD", label: "$ Dollar", locale: "en-US"},
    {value: "EUR", label: "€ Euro", lacale: "de-DE"},
    {value: "JPY", label: "¥ Yen", locale: "ja-JP"},
    {value: "GBP", label: "£ Pound", locale: "en-GB"},

]

export type Currency = (typeof Currencies)[0];