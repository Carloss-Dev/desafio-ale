import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Fieldset,
  Input,
  Portal,
  Stack,
} from "@chakra-ui/react";

export const CardForm = ({ trigger }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Fieldset.Root size="lg" maxW="md">
                <Stack>
                  <Fieldset.Legend>Contact details</Fieldset.Legend>
                  <Fieldset.HelperText>
                    Please provide your contact details below.
                  </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Pergunta</Field.Label>
                    <Input name="question" />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Resposta</Field.Label>
                    <Input name="answer" />
                  </Field.Root>
                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start">
                  Submit
                </Button>
              </Fieldset.Root>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
