// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).
let firstValue: string | number;
firstValue = "hero";

enum CheckStatus {
  Enable = "enable",
  Disable = "disable",
}
let status: CheckStatus = CheckStatus.Enable;

export { status, firstValue };
