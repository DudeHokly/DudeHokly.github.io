"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const setupSchema = z.object({
  name: z.string().min(2, "Введите ваше имя"),
  email: z.string().email("Некорректный email"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  instrument: z.string().min(1, "Выберите инструмент"),
  tuning: z.string().optional(),
  comments: z.string().max(500, "Максимальная длина 500 символов").optional(),
});

const InstrumentSetup = () => {
  const form = useForm({
    resolver: zodResolver(setupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      instrument: "",
      tuning: "",
      comments: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Данные формы:", data);
  };

  return (
    <section className="pt-[80px] pb-[50px]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Настройка музыкальных инструментов
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Выберите инструмент и настройте его параметры. Поддерживаются гитары,
          пианино, скрипки и другие.
        </p>

        <Card className="max-w-lg mx-auto p-6 shadow-lg">
          <CardHeader>
            <CardTitle>Форма настройки инструмента</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите имя" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Введите номер телефона"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@mail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instrument"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Выберите инструмент</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите инструмент" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="guitar">Гитара</SelectItem>
                            <SelectItem value="piano">Пианино</SelectItem>
                            <SelectItem value="violin">Скрипка</SelectItem>
                            <SelectItem value="drums">Барабаны</SelectItem>
                            <SelectItem value="drums">Флейта</SelectItem>
                            <SelectItem value="drums">Треугольник</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tuning"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Настройка (если применимо)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Например, стандартный строй EADGBE"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Дополнительные комментарии</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Дополнительная информация"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Отправить запрос
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstrumentSetup;
