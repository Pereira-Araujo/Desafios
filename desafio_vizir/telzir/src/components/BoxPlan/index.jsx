import {
  Box,
  Table,
  ColumnTitle,
  ValueWithPlan,
  ValueNoPlan,
  ValueWithDiscount,
} from "./style";

const BoxPlanComponent = (props) => {
  return (
    <Box>
      <Table>
        <div>
          <ColumnTitle>Sem FaleMais:</ColumnTitle>
          <ValueWithPlan>
            {props.noPlan.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </ValueWithPlan>
        </div>
        <div>
          <ColumnTitle>Com FaleMais:</ColumnTitle>
          <ValueNoPlan>
            {props.withPlan.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </ValueNoPlan>
        </div>
        <div>
          <ColumnTitle>Economize:</ColumnTitle>
          <ValueWithDiscount>{props.layBy.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}</ValueWithDiscount>
        </div>
      </Table>
    </Box>
  );
};

export default BoxPlanComponent;
