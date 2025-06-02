import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export type FormValues = {
  source: string;
  producer: string;
  brand: string;
  description: string;
  qimperial: number;
  qimperialmeasure: string;
  qmetric: number;
  qmetricmeasure: string;
  servings: number;
  ssimperial: number;
  ssimpmeasure: string;
  ssmetric: number;
  ssmetmeasure: string;
  calories: number;
  price: number;
  pricedate: string;
  priceper: number;
  notes: string;
  // scannedData?: Record<string, any>;
}

type Props = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
};

export default function InputFormRetail({ control, errors }: Props) {
  const fields: {
    name: keyof FormValues;
    label: string;
    rules?: any;
    keyboardType?: any;
    multiline?: boolean;
    placeholder?: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  }[] = [
      { name: 'source', label: 'Source', placeholder: 'Safeway, Lucky, etc.', autoCapitalize: 'words' },
      { name: 'producer', label: 'Producer', placeholder: 'Nabisco, Frito-Lay, etc.', autoCapitalize: 'words' },
      { name: 'brand', label: 'Brand', placeholder: 'Ruffles, Fritos, etc.', autoCapitalize: 'words' },
      { name: 'description', label: 'Description', autoCapitalize: 'words' },
      { name: 'qimperial', label: 'Quantity (Imperial)' },
      { name: 'qimperialmeasure', label: 'Measure (Imperial)', placeholder: 'oz, fl oz, etc.', autoCapitalize: 'none' },
      { name: 'qmetric', label: 'Quantity Metric', autoCapitalize: 'none' },
      { name: 'qmetricmeasure', label: 'Measure (Metric)', placeholder: 'mL, g, etc.', autoCapitalize: 'none' },
      { name: 'servings', label: 'Servings', autoCapitalize: 'none' },
      { name: 'ssimperial', label: 'Serving Size Imperial' },
      { name: 'ssimpmeasure', label: '', placeholder: 'oz, fl oz, etc.', autoCapitalize: 'none' },
      { name: 'ssmetric', label: 'Serving Size Metric' },
      { name: 'ssmetmeasure', label: '', placeholder: 'mL, g, etc.', autoCapitalize: 'none' },
      { name: 'calories', label: 'Calories per Serving' },
      { name: 'price', label: 'Unit Price' },
      { name: 'pricedate', label: 'Price Date' },
      { name: 'priceper', label: 'Price per Measure' },
      { name: 'notes', label: 'Notes', multiline: true },
    ];

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {fields.map((field) => {
        const { name, label, rules, keyboardType, multiline, placeholder, autoCapitalize } = field;
        return (
          <View key={name}>
            <Text style={styles.label}>{label}</Text>
            <Controller
              control={control}
              name={name}
              rules={rules}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCapitalize={autoCapitalize ?? 'none'}
                  placeholder={placeholder}
                  style={[styles.input, multiline && styles.textArea]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={typeof value === 'number' ? value.toString() : value ?? ''}
                  keyboardType={keyboardType}
                  multiline={multiline}
                  numberOfLines={multiline ? 4 : 1}
                />
              )}
            />
            {errors[name] && (
              <Text style={styles.error}>{label || name} is required.</Text>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { maxHeight: 400 },
  content: { paddingBottom: 20 },
  input: { borderBottomWidth: 1, },
  label: { fontSize: 16, marginTop: 10 },
  textArea: { height: 100 },
  error: { color: 'red', marginBottom: 5 },
});