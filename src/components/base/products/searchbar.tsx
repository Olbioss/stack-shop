import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "#/components/ui/input-group";
import { cn } from "#/lib/utils";

type Props = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Searchbar({
  className,
  value,
  onChange,
  placeholder,
}: Props) {
  const [localValue, setLocalValue] = useState(value);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const id = setTimeout(() => onChangeRef.current(localValue), 300);
    return () => clearTimeout(id);
  }, [localValue]);

  const handleClear = () => setLocalValue("");

  return (
    <InputGroup className={cn("w-full max-w-md", className)}>
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <Search className="size-5" />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
      />
      {localValue && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" onClick={handleClear}>
            <X />
            <span className="sr-only">Clear search</span>
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
