import { Box } from "@strapi/design-system";
import { StrictMode } from "react";
import { EditorRef, EmailEditor } from "react-email-editor";
import { useIntl } from "react-intl";
import { EmailConfig } from "../../types";

interface DesignerHTMLEditorProps {
  emailEditorRef: React.RefObject<EditorRef>;
  editorOptions?: EmailConfig;
  serverConfigLoaded: boolean;
  onLoad: () => void;
}

const DesignerHTMLEditor = ({
  emailEditorRef,
  editorOptions,
  serverConfigLoaded,
  onLoad,
}: DesignerHTMLEditorProps) => {
  const { locale } = useIntl();

  return (
    <Box
      style={{
        minHeight: "540px",
        height: "100%",
      }}
    >
      {serverConfigLoaded && (
        <StrictMode>
          <EmailEditor
            options={{ ...editorOptions, locale }}
            minHeight="100%"
            ref={emailEditorRef}
            onLoad={onLoad}
          />
        </StrictMode>
      )}
    </Box>
  );
};

export default DesignerHTMLEditor;
