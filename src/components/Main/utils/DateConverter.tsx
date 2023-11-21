interface DateInfo {
    date: string;
  }
  
export const dateConvert = (dateInfo: DateInfo) => {
    const inputDate = new Date(dateInfo.date);
    const options = {
      year: 'numeric' as const,
      month: 'long' as const,
      day: 'numeric' as const,
      hour: 'numeric' as const,
      minute: 'numeric' as const,
      hour12: true,
    };
    const formattedDate = inputDate.toLocaleString('en-US', options);
    return formattedDate;
  };
  

