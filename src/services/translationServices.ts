export const fetchTranslation = async (
  text: string,
  from: string,
  to: string,
): Promise<string> => {
  const params = new URLSearchParams({
    q: text,
    langpair: `${from}|${to}`,
  });

  const res = await fetch(`https://api.mymemory.translated.net/get?${params}`);

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();

  if (data.responseStatus !== 200) {
    throw new Error(data.responseDetails || "Błąd tłumaczenia");
  }

  return data.responseData.translatedText;
};
