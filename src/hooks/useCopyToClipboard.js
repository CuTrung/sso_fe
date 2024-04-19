import { useState } from 'react';
import { toast } from 'common/utils/toast.util';

function useCopyToClipboard(message = 'Đã sao chép') {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    try {
      if (!navigator?.clipboard) return false;
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success(message);
      return true;
    } catch (error) {
      setCopiedText(null);
      toast.error(`Sao chép thất bại !`);
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;
